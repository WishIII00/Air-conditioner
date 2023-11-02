import Api from '@/services/Api'

export default {
  index () {
    return Api().get('airs')
  },
  show (airId) {
    return Api().get('air/'+ airId)
  },
  post (air) {
    return Api().post('air', air)
  },
  put (air) {
    return Api().put('air/'+ air.id, air)
  },
  delete (air) {
    return Api().delete('air/'+air.id, air)
  },
}