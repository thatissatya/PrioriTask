import React from 'react'
import iconBank from '../constants/iconBank';

function Icon(props) {
    const {id, iconWidth, iconHeight, iconSize, iconFill} = props;
    const iconConfig = iconBank[id];
    let markup = iconConfig?.markup ? iconConfig.markup :  '';
    const defaultStyles = iconConfig.defaultStyles? iconConfig.defaultStyles : {};
    const width = iconSize ? iconSize : iconWidth ? iconWidth : defaultStyles.size ? defaultStyles.size : defaultStyles.width ? defaultStyles.width : 30;
    const height = iconSize ? iconSize : iconHeight ? iconHeight : defaultStyles.size ? defaultStyles.size : defaultStyles.height ? defaultStyles.height : 30;
    const fill = iconFill ? iconFill : defaultStyles.fill? defaultStyles.fill : 'none';
    const styles = {
        width,height,fill
    }
    Object.entries(styles).forEach(([property, value]) => {
      markup = markup.replace( new RegExp( `__${ property }__`, 'gim' ), `${ property }=${ value }` );
    } );
  return (
    <div dangerouslySetInnerHTML={{__html: markup}}></div>
  )
}

export default Icon