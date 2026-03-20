import Image from 'next/image'

import { m, useAnimation } from "framer-motion"
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import Badges from '../../utils/badge.list.util'
import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/projects/featured.module.scss'

export default function FeaturedProject({ content }, index) {

	const { project, url, repo, descriptionTitle,description, stack, imageOptions, images } = content

	const isWideImage = images.length > 0 && images[0].w > images[0].h
	const layoutClass = images.length > 0 
		? (isWideImage ? css.wideLayout : css.tallLayout) 
		: css.noImageLayout

	const controls = useAnimation();
	const { ref, inView  } = useInView({
		"threshold": 0.25,
		"triggerOnce": false
	})

	useEffect( () => {
		if ( inView ) {	controls.start("visible") }
		if ( !inView ) { controls.start("hidden") }
	}, [ controls, inView ] )

	return (
		<m.section 	
			key={index}
			className={`${css.project} ${layoutClass}`} 
			//framer-motion
			ref={ref}
			variants={container}
			initial={[ "rest", "hidden" ]}
			whileHover="hover"
			animate={controls} >
			
			<div className={css.details}>
				<div className={css.projectHeader}>
					<div className={css.header}>
						<h3 className="highlight">{project}</h3>
						{repo && <span className={css.privateOr}><i className="devicon-github-plain"></i>{repo}</span>}
					</div>
					<div className={css.description}>
						<p><strong>{descriptionTitle}</strong> {description}</p>
					</div>
					<div className={css.projectMeta}>
						{stack.length > 0 &&
						<div className={css.stackContainer}>
							<Badges list={stack} block="stack" fullContainer={false} color={false} />
						</div>
						}
						{url &&
						<m.div variants={''} className={css.viewProject}>
							<a href={url} target="_blank" rel="noopener noreferrer">
								<Icon icon={[ 'fad', 'arrow-right-to-bracket' ]} />
							</a>
						</m.div>
						}
					</div>
				</div>
			</div>

			{images.length > 0 &&
			<div className={css.imageContainer}>
				<span className={`${css.imageAnimationContainer}`}>
					{ images.map( ({key, url, hover, h, w }, index) => {
						hover = ( hover === 'left' ) ? hoverLeft : hoverRight
						return (
							<m.div key={`${index}-${key}`} variants={item}>
								<m.div variants={hover}>
									<Image src={url} alt={project} height={h} width={w} />
								</m.div>
							</m.div>
						)}
					) }
				</span>
			</div>
			}
		</m.section>
	)
}

const container = {
	hidden: { 
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.0625
		}
	},
	visible: {
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.25,
		}
	},
	rest: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	},
	hover: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	}
}

const item = {
	hidden: { 
		y: 75, 
		opacity: 0,
		transition: {
			type: "tween",
			ease: "easeIn",
			duration: .35, 
		}
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			ease: "easeOut",
			duration: .5, 
		}
	},
}

const hoverLeft = {
	rest: {
		x: 0
	},
	hover: {
		x: -20
	}
}

const hoverRight = {
	rest: {
		x: 0
	},
	hover: {
		x: 20
	}
}

