FROM python:3.8


ADD app .
ADD app.py .

RUN pip install -r requirements.txt

CMD ["python", "./app.py"]
