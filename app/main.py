from aiohttp import web
import os

from settings import config, BASE_DIR


async def index(request):
    return web.FileResponse(BASE_DIR / "public" / "index.html")


app = web.Application()
app["config"] = config

app.add_routes([web.get("/", index)])
app.router.add_static("/static/", path=BASE_DIR / "public" / "static", name="static")

port = int(os.environ.get("PORT", 8080))
web.run_app(app, port=port)
