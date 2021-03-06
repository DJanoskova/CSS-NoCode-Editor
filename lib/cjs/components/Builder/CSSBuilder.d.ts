import { FunctionComponent } from 'react';
import { ThemeType } from '../../types';
interface CSSBuilderProps {
    style: string;
    theme?: ThemeType;
    onChange?: (style: string) => void;
    reactive?: boolean;
}
declare const CSSBuilder: FunctionComponent<CSSBuilderProps>;
export default CSSBuilder;
