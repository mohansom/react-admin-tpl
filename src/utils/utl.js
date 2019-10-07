const mobileDevWidth = 992

export const isMobileDevFun = (clientWidth) => {
    return Number(clientWidth) < mobileDevWidth
}

// 截流函数
export function debounce (func, delay) {
    let timer
  
    return function (...args) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
}