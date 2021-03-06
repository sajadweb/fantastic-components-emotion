import styled from '../common/styled';
import Variables from './Variables';
const Alert = styled('div')(
    (props: (Variables.AlertProps | any)) => {
        if (props.hide || props.hidden) {
            return { display: 'none' };
        }
        const base_alert = {
            'padding': '.75rem 1.25rem',
            'border': '1px solid transparent',
            'border-radius': '.25rem',
            'margin': props.margin ? props.margin : 0,
            'color': '#fff',
            'backgroundColor': 'transparent',
            '.hr': {
                'border-top': '1px solid',
                borderTopColor: 'transparent',
            },
        };
        if (props.primary) {
            base_alert.backgroundColor = props.theme.color.primary;
            base_alert.color = props.color ? props.color : props.theme.color.primary_dark;
            base_alert['.hr'].borderTopColor = props.theme.color.primary_dark;
            return base_alert;
        }
        if (props.secondary) {
            base_alert.backgroundColor = props.theme.color.secondary;
            base_alert.color = props.color ? props.color : props.theme.color.secondary_dark;
            base_alert['.hr'].borderTopColor = props.theme.color.secondary_dark;
            return base_alert;
        }
        if (props.success) {
            base_alert.backgroundColor = props.theme.color.success;
            base_alert.color = props.color ? props.color : props.theme.color.success_dark;
            base_alert['.hr'].borderTopColor = props.theme.color.success_dark;
            return base_alert;
        }
        if (props.info) {
            base_alert.backgroundColor = props.theme.color.info;
            base_alert.color = props.color ? props.color : props.theme.color.info_dark;
            base_alert['.hr'].borderTopColor = props.theme.color.info_dark;
            return base_alert;
        }
        if (props.danger) {
            base_alert.backgroundColor = props.theme.color.danger;
            base_alert.color = props.color ? props.color : props.theme.color.danger_dark;
            base_alert['.hr'].borderTopColor = props.theme.color.primary_dark;
            return base_alert;
        }
        if (props.warning) {
            base_alert.backgroundColor = props.theme.color.warning;
            base_alert.color = props.color ? props.color : props.theme.color.warning_dark;
            return base_alert;
        }
        if (props.light) {
            base_alert.backgroundColor = props.theme.color.light;
            base_alert.color = props.color ? props.color : props.theme.color.light_dark;
            base_alert['.hr'].borderTopColor = props.theme.color.light_dark;
            return base_alert;
        }
        if (props.dark) {
            base_alert.backgroundColor = props.theme.color.dark;
            base_alert.color = props.color ? props.color : '#fff';
            base_alert['.hr'].borderTopColor = '#fff';
            return base_alert;
        }

        base_alert.backgroundColor = props.backgroundColor ? props.backgroundColor : props.theme.color.primary;
        base_alert.color = props.color ? props.color : base_alert.color;
        base_alert['.hr'].borderTopColor = props.theme.color.primary_dark;
        return base_alert;
    }
);

export default Alert;
