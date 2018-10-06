import { 
    setTextFilter, 
    sortByAmount, 
    sortByDate, 
    setStartDate,
    setEndDate 
} from '../../actions/filters'
import moment from 'moment'

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})
test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})
test('should generate set text filter with provided values', () => {
    const action = setTextFilter('something in')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'something in'
    })
})
test('should generate set text filter with default values', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})
test('should generate action object for sort by date', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
})
test('should generate action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})