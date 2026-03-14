// Core packages

// Section structure
import Container from '../../structure/container';
import Section from '../../structure/section';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block';

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block';
import CopyBlock from '../../blocks/about.copy.block';

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

// Content
import content from '../../../content/index/about.json';

export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title={content.title}
					preTitle={content.preTitle}
					subTitle={content.subTitle}
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/Office Setting - 028.png" alt="Lenando's photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title={content.softskills.title}
							containerClass={about.container}
							iconClass={about.icon}
							icon={content.softskills.icon}
							copy={content.softskills.copy}
						/>
						<BadgesBlock 
							title={content.research.title}
							containerClass={about.container}
							list={content.research.methods}
							fullContainer="fullContainer"
							block="methods" 
							icon={content.research.icon[1]}
							copy={content.research.copy}
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}