from app.exceptions import InvalidWheelParam


def get_code(static_wheel, moving_wheel, cell, codes):
    try:
        codes["keys"].index(static_wheel)
    except ValueError:
        raise InvalidWheelParam("Invalid value for static wheel")

    try:
        codes["keys"].index(moving_wheel)
    except ValueError:
        raise InvalidWheelParam("Invalid value for moving wheel")

    if cell > codes["cells"] or cell < 1:
        raise InvalidWheelParam("Invalid cell value")

    relative_moving_wheel_key = moving_wheel
    if static_wheel != "1":
        static_wheel_position = codes["keys"].index(static_wheel)
        moving_wheel_position = codes["keys"].index(moving_wheel)
        relative_moving_wheel_key = codes["keys"][
            moving_wheel_position - static_wheel_position
        ]

    return codes[relative_moving_wheel_key][cell - 1]
