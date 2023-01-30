import { LayoutProps } from "./Layout.types";

export const Layout = (props: LayoutProps) => {
    const { children, img } = props;

    return (
        <div className='layout'>
            <div className='layout_imgContainer'>
                <img src={img} />
            </div>
            <div className='layout_children'>
                {children}
            </div>
        </div>

    )
}