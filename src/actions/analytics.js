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
  type: 'SET_ORDERS',
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

  const saleAccumulator = (acc, val) => acc.quote_price + val.quote_price;
  const expenseAccumulator = (acc, val) =>
    acc.inventory_costing + val.inventory_costing;

  const sale = {
    current:
      currentMonthData.length > 1
        ? currentMonthData.reduce(saleAccumulator)
        : currentMonthData[0].quote_price,
    previous:
      prevMonthData.length > 1
        ? prevMonthData.reduce(saleAccumulator)
        : prevMonthData[0].quote_price,
    total: rows.length > 1 ? rows.reduce(saleAccumulator) : rows[0].quote_price,
  };

  const expense = {
    current:
      currentMonthData.length > 1
        ? currentMonthData.reduce(expenseAccumulator)
        : currentMonthData[0].inventory_costing,
    previous:
      prevMonthData.length > 1
        ? prevMonthData.reduce(expenseAccumulator)
        : prevMonthData[0].inventory_costing,
    total:
      rows.length > 1
        ? rows.reduce(expenseAccumulator)
        : rows[0].inventory_costing,
  };

  const orders = {
    current: currentMonthData.length,
    previous: prevMonthData.length,
    total: rows.length,
  };

  const pending = rows.filter((x) => x.status === 'pending');

  dispatch(recordSales(sale));
  dispatch(recordExpenses(expense));
  dispatch(recordOrders(orders));
  dispatch(recordPendingOrders(pending));
};

export default initAnalytics;
