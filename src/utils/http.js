function http(method,url,data){
  return new Promise ((resolve,reject)=>{
    wx.request({
      url,
      method,
      data,
      success:res=>resolve(res),
      fail:err=>{
        console.log(err)
        reject(err.errMsg)
      }
    })
  })
}

export default {
  get(url,data){
    return http('GET',url,data)
  },
  post(url,data){
    return http('POST',url,data)
  },
  delete(url,data){
    return http('DELETE',url,data)
  }
}