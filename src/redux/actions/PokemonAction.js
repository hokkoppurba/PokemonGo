export const LIST_POKEMON = 'LIST_POKEMON'
export const ID = 'ID'
export const DETAIL_POKEMON = 'DETAIL_POKEMON'

export function changePokemon(value){
    return{
        type: LIST_POKEMON,
        payload: value
    }
}

export function changeId(value){
  return{
      type: ID,
      payload: value
  }
}

export function changeDetail(value){
  return{
      type: DETAIL_POKEMON,
      payload: value
  }
}
