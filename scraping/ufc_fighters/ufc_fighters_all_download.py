from urllib import request, error, parse
from bs4 import BeautifulSoup
import pandas as pd
import requests
from string import ascii_lowercase
import os

base_path = os.path.dirname(os.path.realpath(__file__))

def download_url(url, name):
  print("downloading: ", url + " name: " + name)
  r = requests.get(url, stream=True)
  if r.status_code == requests.codes.ok:
    with open(base_path + "/output-data/" + name.lower().replace(" " , "-") + ".txt", 'wb') as f:
      for data in r:
        f.write(data)


for i in ascii_lowercase:
  ufc_fighter = f"http://www.ufcstats.com/statistics/fighters?char={i}&page=all"
  download_url(ufc_fighter, i)
