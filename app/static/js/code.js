new Vue({
  el: "#app",
  side_navigation: false,
  delimiters: ["[[", "]]"],
  data: {
    display: {
      search: true,
      structure: true,
      groups: true,
      layout: true,
      nodes: true,
      edges: true,
      json: true,
    },

    msg: "",
    search: "",
    structure_id: "1",
    layout: "breadthfirst",
    curve_style: "straight",
    group: {
      name: "",
      color: "#4f46e5",
    },
    node: {
      name: "",
    },
    edge: {
      parent: "",
      child: "",
    },
    structure: {
      layout: "breadthfirst",
      roots: "",
      nodes: [],
      edges: [],
      style: [],
    },
    groups: [],
    svg_content: "",
  },
  created() {
    window.addEventListener("keypress", this.on_key_press);
    window.addEventListener("resize", this.resize_graph);
  },
  beforeDestroy() {
    window.removeEventListener("keypress", this.on_key_press);
  },
  methods: {
    on_key_press(e) {
      if (e.which === 13) {
        this.content();
      }
    },
    resize_graph(e) {
      this.graph();
    },

    view_as_svg: function () {
      console.log("view_as_svg");
      var svg_content = this.cy.svg({ scale: 1, full: true, bg: "#ffffff" });
      var blob = new Blob([svg_content], {
        type: "image/svg+xml;charset=utf-8",
      });
      var url = URL.createObjectURL(blob);
      // window.location = url;
      window.open(url, "_blank");
    },

    save_as_svg: function () {
      console.log("save_as_svg");
      var svg_content = this.cy.svg({ scale: 1, full: true, bg: "#ffffff" });
      var blob = new Blob([svg_content], {
        type: "image/svg+xml;charset=utf-8",
      });
      var title = this.structure_id;
      saveAs(blob, title + ".svg");
    },

    add_structure() {
      console.log("add_structure");
      var fd = new FormData();
      this.structure.structure_id = this.structure_id;
      fd.append("data", JSON.stringify(this.structure));
      axios.post("/add_structure", fd).then((response) => {
        console.log(response);
        console.log(response.data.status);
        if (response.data.status === "ok") {
          this.get_structures();
        }
      });
    },

    add_group() {
      console.log("add_group");
      var fd = new FormData();
      this.group.structure_id = this.structure_id;
      fd.append("data", JSON.stringify(this.group));
      axios.post("/add_group", fd).then((response) => {
        console.log(response);
        console.log(response.data.status);
        if (response.data.status === "ok") {
          this.get_groups();
        }
      });
    },

    get_groups() {
      console.log("get_groups");
      axios.get("/get_groups").then((response) => {
        this.groups = response.data;
      });
    },

    add_node() {
      console.log("add_node");
      var fd = new FormData();
      this.node.structure_id = this.structure_id;
      fd.append("data", JSON.stringify(this.node));
      axios.post("/add_node", fd).then((response) => {
        console.log(response);
        console.log(response.data.status);
        if (response.data.status === "ok") {
          this.get_structure();
        }
      });
    },

    add_edge() {
      console.log("add_edge");
      var fd = new FormData();
      fd.append("data", JSON.stringify(this.edge));
      axios.post("/add_edge", fd).then((response) => {
        this.get_structure();
      });
    },

    update(table, column, id, value) {
      console.log("--------------------");
      console.log("update");
      console.log("table: ", table);
      console.log("column: ", column);
      console.log("id: ", id);
      console.log("value: ", value);
      console.log("--------------------");

      var fd = new FormData();

      fd.append("table", table);
      fd.append("column", column);
      fd.append("id", id);
      fd.append("value", value);

      axios.post("/update", fd).then((response) => {
        console.log(response);
        console.log(response.data.status);
        this.get_structure();
      });
    },

    delete_structure(id) {
      console.log("delete_structure");
      console.log("id: ", id);
      var fd = new FormData();
      fd.append("id", id);
      axios.post("/delete_structure", fd).then((response) => {
        console.log(response.data);
        this.get_structure();
      });
    },

    delete_group(id) {
      console.log("delete_group");
      console.log("id: ", id);
      var fd = new FormData();
      fd.append("id", id);
      axios.post("/delete_group", fd).then((response) => {
        console.log(response.data);
        this.get_structure();
      });
    },

    delete_node(id) {
      console.log("delete_node");
      console.log("id: ", id);
      var fd = new FormData();
      fd.append("id", id);
      axios.post("/delete_node", fd).then((response) => {
        console.log(response.data);
        this.get_structure();
      });
    },

    delete_edge(id) {
      console.log("delete_edge");
      console.log("id: ", id);
      var fd = new FormData();
      fd.append("id", id);
      axios.post("/delete_edge", fd).then((response) => {
        console.log(response.data);
        if (response.data.status == "ok") {
          this.get_structure();
        }
      });
    },

    get_structure() {
      console.log("get_structure");
      this.get_groups();
      axios
        .get("/get_structure", {
          params: {
            search: this.search,
            layout: this.layout,
            structure_id: this.structure_id,
            curve_style: this.curve_style,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.structure = JSON.parse(JSON.stringify(response.data))[0];
          this.graph();
        });
    },

    graph() {
      console.log("graph");
      self = this;
      this.cy = cytoscape({
        container: document.getElementById("cy"),

        autounselectify: true,
        boxSelectionEnabled: false,
        minZoom: 0.2,
        maxZoom: 5,

        userZoomingEnabled: true,
        userPanningEnabled: true,
        wheelSensitivity: 0.2, // zoom: 1,

        layout: {
          name: this.structure.layout, // breadthfirst, circle, grid,  random, concentric, cose
          directed: true,
          roots: this.structure.roots,
          padding: 2,
        },
        style: this.structure.style,
        elements: {
          nodes: this.structure.nodes,
          edges: this.structure.edges,
        },
      });

      self.cy.on("tap", "node", function () {
        console.log("node!");
        console.log("id", this.id());

        if (self.edge.parent === "") {
          self.edge.parent = this.id();
        } else {
          self.edge.child = this.id();
          self.add_edge();
          self.edge.parent = "";
          self.edge.child = "";
        }
      });

      self.cy.on("tap", "edge", function () {
        console.log("edge!");
        console.log("id", this.id());
        self.delete_edge(this.id());
      });
    }, // end graph
  }, // end methods
  mounted: function () {
    this.get_structure();
    // this.get_data();
  }, // end mounted
}); // end vue app
