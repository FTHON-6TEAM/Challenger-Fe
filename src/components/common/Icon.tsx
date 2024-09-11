import AddRounded from '@mui/icons-material/AddRounded';
import CheckBoxRounded from '@mui/icons-material/CheckBoxRounded';
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded';
import ClearRounded from '@mui/icons-material/ClearRounded';
import DeleteRounded from '@mui/icons-material/DeleteRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { SvgIconProps } from '@mui/material/SvgIcon';

/* IconName: prop으로 받기 때문에 소문자 사용 */
const IconMap = {
  add: AddRounded,
  clear: ClearRounded,
  checkbox: CheckBoxRounded,
  delete: DeleteRounded,
  checkCircle: CheckCircleRounded,
  notification: NotificationsNoneRoundedIcon,
  menu: MenuRoundedIcon,
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