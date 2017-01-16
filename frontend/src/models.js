import Immutable from 'immutable'

export const initialState = Immutable.fromJS({
  recordsById: Immutable.OrderedMap({}),
})

export const SearchResult = Immutable.Record({
  id: null,
  link: null,
  title: null,
  createTime: null,
})
