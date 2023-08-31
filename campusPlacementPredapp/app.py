from flask import Flask,render_template,request
import pickle
import numpy as np

app=Flask(__name__)

model=pickle.load(open('./model/placementmodel.pkl','rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/pstatement')
def pstate():
    return render_template('pstate.html')

@app.route('/idea')
def idea():
    return render_template('idea.html')

@app.route('/form',methods=['GET'])
def form():
    return render_template('form.html')

@app.route('/predict',methods=['POST'])
def predict():
    input_values = [float(x) for x in request.form.values()]
    features=[np.array(input_values)]
    output=model.predict(features)
    if output==1.0:
        return render_template('predicty.html')
    else :
        return render_template('predictn.html')

if __name__=='__main__':
   app.run()
