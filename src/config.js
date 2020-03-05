const REACT_PREFIX = 'REACT_APP_';

function getReactConfig() {
  console.log(process.env)
  return Object.entries(process.env)
    .filter(([key]) => key.startsWith(REACT_PREFIX))
    .reduce((acc, [key, value]) => ({
      ...acc,
      [key.replace(REACT_PREFIX, '')]: value,
    }), {})
}

export const config = getReactConfig();
