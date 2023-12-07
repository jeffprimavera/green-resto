'use client';

import React from 'react';
import Rive from '@rive-app/react-canvas';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import herobg from './assets/hero_bg.jpg'
import herobgmobile from './assets/hero_bg-mobile.jpg'
import Autoplay from 'embla-carousel-autoplay'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { isPhone } from '../../utils/device'
import cx from '../../utils/cx'
import { BackgroundImage } from '../../components/Image'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const SliderHome: React.FC<PropType> = (props) => {

    const { slides, options } = props
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    return (
        <section className='relative'>
            
            <BackgroundImage 
            className={cx(
                'fixed inset-0 flex flex-col items-center justify-center w-[1920px] h-[810px] top-20 lg:top-28 bg-contain bg-no-repeat bg-center left-0 bottom-0' ,
                isPhone && 'w-full h-[1200px] top-0',
            )}
            src={isPhone ? herobgmobile.src : herobg.src}
            >
                {!isPhone ? (
                    <div className="embla w-full h-full">
                        <div className="embla__viewport w-full h-full" ref={emblaRef}>
                            <div className="embla__container w-full h-full">

                                <div className="embla__slide">
                                    <Rive
                                        src="/assets/new_file.riv"
                                        stateMachines='State Machine 1'
                                    />
                                </div>

                                <div className="embla__slide">
                                    <Rive
                                        className='w-full h-full'
                                        src="/assets/new_file.riv"
                                        stateMachines='State Machine 1'
                                    />
                                </div>

                                <div className="embla__slide">
                                    <Rive
                                        className='w-full h-full'
                                        src="/assets/new_file.riv"
                                        stateMachines='State Machine 1'
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='text-white w-full h-full pt-9'>this is mobile</div>
                )}

            </BackgroundImage>
        </section>
    )
}

export default SliderHome
