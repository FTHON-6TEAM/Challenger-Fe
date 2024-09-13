import AddRounded from '@mui/icons-material/AddRounded';
import CheckBoxRounded from '@mui/icons-material/CheckBoxRounded';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ClearRounded from '@mui/icons-material/ClearRounded';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import DeleteRounded from '@mui/icons-material/DeleteRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { SvgIconProps } from '@mui/material/SvgIcon';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';

/* IconName: prop으로 받기 때문에 소문자 사용 */
const IconMap = {
  add: AddRounded,
  clear: ClearRounded,
  checkbox: CheckBoxRounded,
  delete: DeleteRounded,
  done: DoneAllOutlinedIcon,
  checkCircle: CheckCircleOutlineOutlinedIcon,
  notification: NotificationsNoneRoundedIcon,
  menu: MenuRoundedIcon,
  assign: AssignmentIndOutlinedIcon,
  calendar: CalendarTodayOutlinedIcon,
  flag: FlagOutlinedIcon,
  home: OtherHousesIcon,
  qna: QuestionAnswerTwoToneIcon,
} as const;

type IconName = keyof typeof IconMap;
export type IconProps = SvgIconProps & { name: IconName };

const Icon = (props: IconProps) => {
  const { name, ...others } = props;
  const IconComponent = IconMap[name];

  if (!IconComponent) return null;
  return <IconComponent {...others} name={name} />;
};

export default Icon;
