// Core packages
import Image from 'next/image';

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
import content from '../../../content/index/technical.json';

export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title={content.title}
					preTitle={content.preTitle}
					subTitle={content.subTitle}
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title={content.polymath.title}
							icon={content.polymath.icon}
							copy={content.polymath.copy}
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title={content.software.title}
							copy={content.software.copy}
							list={content.software.list}
							block="software" 
							fullContainer="fullContainer"
							icon={content.software.icon}
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title={content.tech.title}
							copy={content.tech.copy}
							list={content.tech.list}
							block="tech"
							fullContainer="fullContainer" 
							icon={content.tech.icon}
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
		</Section>
	)
}