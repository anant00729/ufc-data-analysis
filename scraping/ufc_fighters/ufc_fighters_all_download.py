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

# ufc_event_stats_url = "http://www.ufcstats.com/statistics/fighters?char=a&page=all"
# _output_file = 'output.txt'
# response = request.urlopen(ufc_event_stats_url)
# web_content = response.read().decode('UTF-8')
#
# html_soup = BeautifulSoup(web_content, 'html.parser')
#
# row_container = html_soup.find_all('tr', class_='b-statistics__table-row')
#
# df = pd.DataFrame()
#
#
