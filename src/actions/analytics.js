/* eslint-disable radix */
import moment from 'moment';

const recordSales = (payload) => ({
  type: 'SET_SALE',
  payload,
});

const recordExpenses = (payload) => ({
  type: 'SET_EXPENSE',
  payload,
});

const recordOrders = (payload) => ({
  type: 'SET_ORDERS_NUM',
  payload,
});

const recordPendingOrders = (payload) => ({
  type: 'SET_PENDING',
  payload,
});

const initAnalytics = (rows) => (dispatch) => {
  const startingDayOfCurrentMonth = moment().startOf('month');
  const currentMonthData = rows.filter((x) =>
    moment(x.date, 'DD/MM/YYYY').isSame(startingDayOfCurrentMonth, 'month'),
  );

  const startingDayOfPrevMonth = startingDayOfCurrentMonth.subtract(1, 'month');
  const prevMonthData = rows.filter((x) =>
    moment(x.date, 'DD/MM/YYYY').isSame(startingDayOfPrevMonth, 'month'),
  );

  const saleAccumulator = (acc, val) => acc + val.quote_price;
  const expenseAccumulator = (acc, val) => acc + val.inventory_costing;

  const sale = {
    total: rows.length > 1 ? rows.reduce(saleAccumulator, 0) : rows[0].quote_price,
    current:
      currentMonthData.length > 1
        ? currentMonthData.reduce(saleAccumulator, 0)
        : currentMonthData[0].quote_price,
    previous:prevMonthData.length > 0 ? 
      prevMonthData.length > 1
        ? prevMonthData.reduce(saleAccumulator, 0)
        : prevMonthData[0].quote_price : 0,
  };

  const expense = {
    total:
    rows.length > 1
      ? rows.reduce(expenseAccumulator, 0)
      : rows[0].inventory_costing,
    current:
      currentMonthData.length > 1
        ? currentMonthData.reduce(expenseAccumulator, 0)
        : currentMonthData[0].inventory_costing,
    previous:prevMonthData.length > 0 ? 
      prevMonthData.length > 1
        ? prevMonthData.reduce(expenseAccumulator, 0)
        : prevMonthData[0].inventory_costing : 0,
  };

  const orders = {
    total: rows.length,
    current: currentMonthData.length,
    previous: prevMonthData.length,
  };

  const pending = rows.filter((x) => x.status === 'pending');

  dispatch(recordSales(sale));
  dispatch(recordExpenses(expense));
  dispatch(recordOrders(orders));
  dispatch(recordPendingOrders(pending));
};

export default initAnalytics;
