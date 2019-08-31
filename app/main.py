from aiohttp import web
import os


from app.settings import config
from app.routes import add_routes


app = web.Application()
app["config"] = config

add_routes(app)

port = int(os.environ.get("PORT", 8080))
web.run_app(app, port=port)
