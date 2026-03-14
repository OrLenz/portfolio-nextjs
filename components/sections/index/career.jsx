import Badges from '../../utils/badge.list.util';
import { formatPeriod } from '../../utils/period.util';

// Section structure
import Container from '../../structure/container';
import Section from '../../structure/section';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block';

// Career scss
import career from '../../../styles/sections/index/career.module.scss';

// Content
import content from '../../../content/index/career.json';

export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title={content.title}
					preTitle={content.preTitle}
					subTitle={content.subTitle}
				/>
				<section className={career.area}>
					{content.companies.map((company, companyIndex) => {
						const companyPeriod = formatPeriod(company.startDate, company.endDate)
						return (
						<div key={companyIndex}>
							<article className={career.company}>
								<div className={career.companyContent}>
									<span className={career.companyHeader}>
										<h3>{company.name}</h3>
										<h4>{company.type}</h4>
										<h4>{companyPeriod.label} · {companyPeriod.duration}</h4>
										<h5>{company.location}</h5>
									</span>
									<p>{company.description}</p>
								</div>
								<div className={career.companyAlt}></div>
							</article>

							<article className={career.companyPositions}>
								{company.positions.map((position, posIndex) => {
									const posPeriod = formatPeriod(position.startDate, position.endDate)
									return (
									<div key={posIndex} className={career.position}>
										<div className={career.positionContent}>
											<span className={career.positionHeader}>
												<h3>{position.title}</h3>
												<h4>{posPeriod.label} · {posPeriod.duration}</h4>
											</span>
											<p>{position.description}</p>
											{position.contributions && position.contributions.length > 0 && (
												<>
													<p>Key projects & contributions 👇</p>
													<ul className={career.list}>
														{position.contributions.map((contrib, contribIndex) => (
															<li key={contribIndex}>
																{contrib.item}
																<span className={career.subList}>
																	<span className={career.bullet}></span>
																	{contrib.detail}
																</span>
															</li>
														))}
													</ul>
												</>
											)}
											{position.stack && position.stack.length > 0 && (
												<Badges list={position.stack} block="stack" fullContainer="fullContainer"/>
											)}
										</div>
										<div className={career.positionAlt}></div>
									</div>
									)
								})}
							</article>
						</div>
					)
					})}
				</section>
			</Container>
		</Section>
	)
}