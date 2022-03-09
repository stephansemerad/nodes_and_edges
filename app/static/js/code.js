new Vue({
  el: "#app",
  delimiters: ["[[", "]]"],
  data: {
    msg: "",
    node: {
      name: "",
    },
    edge: {
      parent: "",
      child: "",
    },
    structure: {
      id: "test",
      layout: "breadthfirst",
      root: "",
      nodes: [],
      edges: [],
      style: [],
    },
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

    add_node() {
      console.log("add_node");
      var fd = new FormData();
      fd.append("data", JSON.stringify(this.node));
      axios.post("/add_node", fd).then((response) => {
        console.log(response);
      });
    },

    add_edge() {
      console.log("add_edge");
      var fd = new FormData("data", this.edge);
      axios.post("/add_edge", fd).then((response) => {
        console.log(response.data);
      });
    },

    remove_node() {},

    remove_edge() {},

    get_structure() {
      console.log("get_structure");
    },

    get_data() {
      axios.get("/static/json/graph_style.json").then((response) => {
        this.structure.style = JSON.parse(JSON.stringify(response.data));
        axios.get("/static/json/graph_nodes.json").then((response) => {
          this.structure.nodes = JSON.parse(JSON.stringify(response.data));
          axios.get("/static/json/graph_edges.json").then((response) => {
            this.structure.edges = JSON.parse(JSON.stringify(response.data));
            this.graph();
          });
        });
      });
    },
    graph() {
      console.log("graph");
      var cy = (window.cy = cytoscape({
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
          roots: "#a",
          padding: 2,
        },
        style: this.structure.style,
        elements: {
          nodes: this.structure.nodes,
          edges: this.structure.edges,
        },
      }));

      cy.on("tap", "node", function () {
        console.log("node!");
        console.log("id", this.id());
      });

      cy.on("tap", "edge", function () {
        console.log("edge!");
        console.log("id", this.id());
      });
    }, // end graph
  }, // end methods
  mounted: function () {
    this.get_data();
  }, // end mounted
}); // end vue app
