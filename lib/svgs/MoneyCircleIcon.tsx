import { Icon, IconProps, Path } from "./Icon"
import { useColor } from "../utils/hooks"

export const MoneyCircleIcon = ({ fill, ...restProps }: IconProps) => {
  const color = useColor()
  return (
    <Icon {...restProps} viewBox="0 0 19 19">
      <Path
        d="M16.1114 8.19C16.1114 12.4371 12.6684 15.88 8.4214 15.88C4.17436 15.88 0.731445 12.4371 0.731445 8.19C0.731445 3.94293 4.17436 0.5 8.4214 0.5C12.6684 0.5 16.1114 3.94293 16.1114 8.19Z"
        fill={color(fill)}
        fillRule="nonzero"
      />

      <Path
        d="M16.1114 8.19C16.1114 12.4371 12.6684 15.88 8.4214 15.88C4.17436 15.88 0.731445 12.4371 0.731445 8.19C0.731445 3.94293 4.17436 0.5 8.4214 0.5C12.6684 0.5 16.1114 3.94293 16.1114 8.19Z"
        fill="white"
        fillRule="nonzero"
        scale={0.9}
        translateX={0.8}
        translateY={0.8}
      />

      <Path
        d="M6.61674 7.94784H5.4045V3.31148H6.07797C6.68471 3.31328 7.2661 3.55809 7.69514 3.99245C8.12417 4.4268 8.36599 5.01539 8.36777 5.62966C8.36777 5.73816 8.41034 5.84221 8.48612 5.91893C8.5619 5.99565 8.66468 6.03875 8.77185 6.03875C8.87902 6.03875 8.9818 5.99565 9.05758 5.91893C9.13336 5.84221 9.17593 5.73816 9.17593 5.62966C9.17593 4.79785 8.84954 4.0001 8.26856 3.41192C7.68758 2.82373 6.8996 2.4933 6.07797 2.4933H5.4045V1.26602C5.4045 1.15753 5.36193 1.05347 5.28615 0.976753C5.21037 0.900034 5.10759 0.856934 5.00042 0.856934C4.89325 0.856934 4.79047 0.900034 4.71469 0.976753C4.63891 1.05347 4.59634 1.15753 4.59634 1.26602V2.4933H3.65348C2.83185 2.4933 2.04387 2.82373 1.46289 3.41192C0.881912 4.0001 0.555521 4.79785 0.555521 5.62966C0.555521 6.46148 0.881912 7.25922 1.46289 7.8474C2.04387 8.43559 2.83185 8.76602 3.65348 8.76602H4.59634V13.4024H3.38409C2.77735 13.4006 2.19596 13.1558 1.76692 12.7214C1.33789 12.2871 1.09607 11.6985 1.0943 11.0842C1.0943 10.9757 1.05172 10.8717 0.975943 10.7949C0.900163 10.7182 0.797384 10.6751 0.690214 10.6751C0.583045 10.6751 0.480266 10.7182 0.404486 10.7949C0.328706 10.8717 0.286133 10.9757 0.286133 11.0842C0.286133 11.4961 0.366264 11.9039 0.521951 12.2844C0.677638 12.665 0.905832 13.0107 1.1935 13.302C1.77448 13.8901 2.56246 14.2206 3.38409 14.2206H4.59634V15.4478C4.59634 15.5563 4.63891 15.6604 4.71469 15.7371C4.79047 15.8138 4.89325 15.8569 5.00042 15.8569C5.10759 15.8569 5.21037 15.8138 5.28615 15.7371C5.36193 15.6604 5.4045 15.5563 5.4045 15.4478V14.2206H6.61674C7.43837 14.2206 8.22635 13.8901 8.80733 13.302C9.38831 12.7138 9.7147 11.916 9.7147 11.0842C9.7147 10.2524 9.38831 9.45464 8.80733 8.86646C8.22635 8.27828 7.43837 7.94784 6.61674 7.94784ZM3.65348 7.94784C3.04619 7.94784 2.46377 7.70361 2.03435 7.26886C1.60493 6.83412 1.36368 6.24448 1.36368 5.62966C1.36368 5.01484 1.60493 4.4252 2.03435 3.99046C2.46377 3.55572 3.04619 3.31148 3.65348 3.31148H4.59634V7.94784H3.65348ZM6.61674 13.4024H5.4045V8.76602H6.61674C7.22404 8.76602 7.80645 9.01026 8.23587 9.445C8.66529 9.87975 8.90654 10.4694 8.90654 11.0842C8.90654 11.699 8.66529 12.2887 8.23587 12.7234C7.80645 13.1582 7.22404 13.4024 6.61674 13.4024Z"
        fill={color(fill)}
        fillRule="nonzero"
        scale={0.65}
        translateX={5}
        translateY={3}
      />
    </Icon>
  )
}
