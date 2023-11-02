import Api from '@/services/Api'

export default {
  index () {
    return Api().get('orderlists')
  },
  show (orderlistId) {
    return Api().get('orderlist/'+orderlistId)
  },
  post (orderlist) {
    return Api().post('orderlist',orderlist)
  },
  put (orderlist) {
    return Api().put('orderlist/'+orderlist.id, orderlist)
  },
  delete (orderlist) {
    return Api().delete('orderlist/'+orderlist.id, orderlist)
  }
}