import React from 'react'
import ConnectedExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const Home = () => {
    return (
        <div>
            <ExpenseListFilters />
            <ConnectedExpenseList />
        </div>
    )
}


export default Home