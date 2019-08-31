import pytest
import json
from app.code_wheel import get_code
from app.settings import BASE_DIR
from app.exceptions import InvalidWheelParam

codes_file = open(BASE_DIR / "app/data/indy4a_code_wheel.json")
codes_string = codes_file.read()
codes = json.loads(codes_string)


@pytest.mark.parametrize(
    "static_wheel,moving_wheel,cell,expected",
    [("1", "1", 1, "E"), ("1", "1", 2, "R"), ("1", "0", 2, "I"), ("1", "B", 2, "U")],
)
def test_get_code_starting_point(static_wheel, moving_wheel, cell, expected):
    code = get_code(static_wheel, moving_wheel, cell, codes)
    assert code == expected


@pytest.mark.parametrize(
    "static_wheel,moving_wheel,cell,expected",
    [
        ("2", "1", 1, "R"),
        ("2", "1", 2, "I"),
        ("2", "0", 2, "M"),
        ("2", "B", 2, "N"),
        ("E", "0", 11, "S"),
    ],
)
def test_get_code_moving_wheel(static_wheel, moving_wheel, cell, expected):
    code = get_code(static_wheel, moving_wheel, cell, codes)
    assert code == expected


@pytest.mark.parametrize(
    "static_wheel,moving_wheel,cell,expected",
    [("1", "Y", 1, "R"), ("3", "Y", 1, "N"), ("3", "2", 1, "R")],
)
def test_get_code_moving_wheel_backwards(static_wheel, moving_wheel, cell, expected):
    code = get_code(static_wheel, moving_wheel, cell, codes)
    assert code == expected


def test_invalid_static_wheel_key():
    with pytest.raises(InvalidWheelParam):
        get_code("AA", "3", 1, codes)


def test_invalid_moving_wheel_key():
    with pytest.raises(InvalidWheelParam):
        get_code("A", "33", 1, codes)


@pytest.mark.parametrize("cell", [19, 0, -3])
def test_invalid_cell_number(cell):
    with pytest.raises(InvalidWheelParam):
        get_code("A", "3", cell, codes)
