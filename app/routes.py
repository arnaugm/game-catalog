from aiohttp import web
from app.settings import BASE_DIR
import json
from app.code_wheel import get_code


async def index(request):
    return web.FileResponse(BASE_DIR / "public" / "index.html")


async def games(request):
    data = {"some": "data"}
    return web.json_response(data)


async def code_wheel(request):
    static_wheel = request.query.get("static_wheel")
    moving_wheel = request.query.get("moving_wheel")
    cell = request.query.get("cell")

    codes_file = open(BASE_DIR / "app/data/indy4a_code_wheel.json")
    codes_string = codes_file.read()
    codes = json.loads(codes_string)

    code = get_code(static_wheel.upper(), moving_wheel.upper(), int(cell), codes)

    return web.json_response({"code": code})


def add_routes(app):
    app.router.add_route("GET", "/", index)
    app.router.add_route("GET", "/api/games", games)
    app.router.add_route("GET", "/api/wheel", code_wheel)
    app.router.add_static(
        "/static/", path=BASE_DIR / "public" / "static", name="static"
    )
