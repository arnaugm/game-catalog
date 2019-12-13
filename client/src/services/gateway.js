const gateway = {
  codeWheel: async ({ staticWheel, movingWheel, cell }) => {
    if (!staticWheel || !movingWheel || !cell) {
      return null;
    }

    const response = await fetch(
      `/api/wheel?static_wheel=${staticWheel}&moving_wheel=${movingWheel}&cell=${cell}`,
    );

    const json = await response.json();
    return json.code;
  },
};

export default gateway;
