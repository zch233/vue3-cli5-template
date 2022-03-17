import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const formatTime = ({ time = Date.now() / 1000, format = 'YYYY-MM-DD', notSecond = false }) => {
    const datetime = dayjs(time * (notSecond ? 1 : 1000)).locale('zh-cn');
    return format ? datetime.format(format) : datetime;
};

export const calculateDayDiff = (startTime, endTime) => dayjs(startTime).diff(dayjs(endTime), 'day');

export const compareTime = (time1, method, time2) => dayjs(time1)[method](time2);
