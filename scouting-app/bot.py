import slack
import os
from pathlib import Path
from dotenv import load_dotenv

env_path = Path(".") / '.env'
os.environ['SLACK_TOKEN'] = 'xoxb-1286819291120-6955692873013-MnhV2rLaFePl097kRkJcr0A5'
load_dotenv(dotenv_path=env_path)

client = slack.WebClient(token=os.environ['SLACK_TOKEN'])
client.chat_postMessage(channel='#match_updates',text="Hello no it going")