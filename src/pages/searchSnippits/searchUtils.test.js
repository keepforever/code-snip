import { trimSearch } from './utils'
import { soupTestString } from '../../constants'

it('should return the index of matching inputs', () => {
  const search = "kang"
  const snipSoup = JSON.parse(soupTestString)
  expect(trimSearch(snipSoup, search)[0]).toEqual(13)
})
