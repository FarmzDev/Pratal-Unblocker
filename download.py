import pyperclip
import requests
from bs4 import BeautifulSoup
import zipfile
import io

response = requests.get("https://archive.eaglercraft.rip/Eaglercraft_1.5/client/")
soup = BeautifulSoup(response.content, features="lxml")
versions = [item.text for item in soup.find_all("span", {"class": "name"})]
versions.reverse()
output = ""
for version in versions:
    version = version.replace("/", "")
    output += f'\n"{version}": "eagler_1.5.2_{version}",'
print(output)
pyperclip.copy(output)