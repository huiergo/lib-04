// 源文件
import React,{PropsWithChildren} from 'react';
import t from 'prop-types'
import { usePrefersColor} from 'dumi/theme'
import './index.less'

export interface MessageProps{
   /**
    * @description Message 的类型
    * @default 'info'
    */
    kind?:'info'|'positive'|'negative'|'warning'
     /**
    * @description 主题色
    * @default 'blue'
    */
   theme?:string
}

export type KindMap = Record<Required<MessageProps>['kind'],string>

const kinds:KindMap={
    info: "red",
    positive: "green",
    negative: "blue",
    warning: "purple"
}

const Message: React.FC<PropsWithChildren<MessageProps>>=({children, kind="info",...rest})=>{
    const [color, setColor]=usePrefersColor()
    return (
        <div
            className='__lib-04__message'
            style={{color:rest.theme}}
            {...rest}
        >
            {children}
            <div  className='__lib-04__message-text'>自定义的主题色配置为：{rest.theme}</div>
            <div>Global theme color {color}</div>
        </div>
    )
}

Message.propTypes={
    kind:t.oneOf(['info','positive','negative','warning'])
}

export default Message