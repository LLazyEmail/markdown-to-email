export const li = {
  msoLineHeightRule: 'exactly',
  msTextSizeAdjust: '100%',
  WebkitTextSizeAdjust: '100%'
}

export const p = {
  lineHeight: '125%',
  margin: '10px 0',
  padding: '0',
  ...li,
  color: '#111111',
  fontFamily: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSize: '18px',
  textAlign: 'left'
}


export const a = {
  ...li,
  fontWeight: 'bold',
  textDecoration: 'underline'
}