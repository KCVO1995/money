import api from '@/api';

// const showAmount = (type: string, unit: Unit, according: any, record: boolean) => {
//   const recordList = clone(store.state.recordList).filter(record => record.type === type);
//   if (recordList.length === 0) {return 0;}
//   const todayGroup = [];
//   let total = 0;
//   for (let i = 0; i < recordList.length; i++) {
//     const recordCreateAt = dayjs(recordList[i].createAt);
//     if (dayjs(recordCreateAt).isSame(according, unit)) {
//       todayGroup.push(recordList[i]);
//     }
//   }
//   if (record) {return todayGroup;}
//   for (let i = 0; i < todayGroup.length; i++) {total += todayGroup[i].amount;}
//   return total;
// };

const showAmount = async (startAt?: string, endAt?: string, isExpend?: boolean) => {
  const query = {} as { [key: string]: string | boolean };
  // eslint-disable-next-line @typescript-eslint/camelcase
  startAt ? query.start_at = startAt : '';
  // eslint-disable-next-line @typescript-eslint/camelcase
  endAt ? query.end_at = endAt : '';
  // eslint-disable-next-line @typescript-eslint/camelcase
  isExpend !== undefined ? query.is_expend = isExpend : '';
  let total = 0;
  try {
    const {data: {count, rows}} = await api.record.list(query);
    for (let i = 0; i < count; i++) {
      total += rows[i].amount;
    }
  } catch (e) {
    console.log(e, 'error');
  }
  return total;
};

export default showAmount;
