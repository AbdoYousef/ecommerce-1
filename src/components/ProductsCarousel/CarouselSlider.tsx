interface CarouselSliderProps {
    carouselClass?: string;
}

export const CarouselSlider: React.FC<CarouselSliderProps> = function({ carouselClass }){
    const handleLeftArrowClick = () => {
        const leftSlider = document.querySelector<HTMLElement>(`.${carouselClass} .slick-prev`);
            if (leftSlider) {
                leftSlider.click();
            } else {
                console.warn('Left arrow element not found. Check if slick-carousel is fully loaded.');
            }
    };

    const handleRightArrowClick = () => {
        const rightSlider = document.querySelector<HTMLElement>(`.${carouselClass} .slick-next`);
        if (rightSlider) {
            rightSlider.click();
        } else {
            console.warn("Right arrow element not found");
        }
    };


    return(
        <>
            <div className='arrow-sty'>
                <i onClick={handleLeftArrowClick} className="arrows-1 arr-l bi bi-arrow-left"></i>
                <i onClick={handleRightArrowClick} className="arrows-1 arr-r bi bi-arrow-right"></i>
            </div>
        </>
    )
}