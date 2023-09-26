import React from 'react'

const styles = {
    dark: {
        background: 'black',
        color: 'white'
    },
    yellow: {
        background: 'yellow',
        color: 'red'
    }
}
const HOC = (WrapperComp) => {
  return function(args) {
    let temp = {};

    if(args.dark) {
        temp = {...styles.dark};
    } else if(args.yellow) {
        temp = {...styles.yellow};
    }
    const obj = {...args, style: temp}
    return <WrapperComp {...obj}/>
  }
}

export default HOC