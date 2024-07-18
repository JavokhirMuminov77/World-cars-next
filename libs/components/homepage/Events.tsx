import React from 'react';
import { Stack, Box, Link, Button } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { T } from '../../types/common';

interface EventData {
	eventTitle: string;
	city: string;
	description: string;
	imageSrc: string;
}




const eventsData: EventData[] = [

	{
		eventTitle: 'Paradise City Theme Park',
		city: 'Incheon',
		description:
			'Experience magic and wonder in Incheon with a visit to the night-themed indoor theme park Wonderbox at Paradise City!',
		imageSrc: '/img/events/INCHEON.webp',
	},
	{
		eventTitle: 'Taebaeksan Snow Festival',
		city: 'Seoul',
		description: 'If you have the opportunity to travel to South Korea, do not miss the Taebaeksan Snow Festival!',
		imageSrc: '/img/events/SEOUL.webp',
	},
	{
		eventTitle: 'Suseong Lake Event',
		city: 'Daegu',
		description: 'The Suseong Lake Festival is a culture and arts festival held alongside Suseongmot Lake!',
		imageSrc: '/img/events/DAEGU.webp',
	},
	{
		eventTitle: 'Sand Festival',
		city: 'Busan',
		description:
			'Haeundae Sand Festival, the nation’s largest eco-friendly exhibition on sand, is held at Haeundae Beach!',
		imageSrc: '',
	},
];

const EventCard = ({ event }: { event: EventData }) => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>EVENT CARD</div>;
	} else {
		return (
			<Stack
				className="event-card"
				style={{
					backgroundImage: `url(${event?.imageSrc})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<Box component={'div'} className={'info'}>
					<strong>{event?.city}</strong>
					<span>{event?.eventTitle}</span>
				</Box>
				<Box component={'div'} className={'more'}>
					<span>{event?.description}</span>
				</Box>
			</Stack>
		);
	}
};

const Events = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>EVENT CARD</div>;
	} else {
		return (
			<Stack className={'main-content'}>
				<Stack className={'container'}>
					<div className={'leaut-2-1'}>

				<div className={'layout-2-1-main'}>
				 <section className={'global-news'}>
					<h2 className={'global-news-heading'}>


						{/* <!-- NEWS-LIST --> */}
						<div className={'new-list'}>
							<div className={'news-list-item article-card-horizontal'}>
								<img className={'article-card-horizontal-img'} src="/img/banner/audi.jpg" alt=""  width="310" height="165"/>
								<div className={'article-card-horizontal-content'}>
						  		<h3 className={'article-card-horizontal-title'}>
										Отопление Ташкента на 30 лет переходит в управление французской Veolia
									</h3>
									<p className={'article-card-horizontal-text'}>Система теплоснабжения Ташкента на 30 лет будет передана в управление французской компании Veolia для модернизации и реконструкции, сообщает 22 сентября пресс-служба...</p>
									<footer className={'article-card-footer'}>
										<img className={'artical-card-source-icon'} src="/img/logo/audi-logo.jpg" alt=""  width="20" height="20"/>
										<div className={'article-card-time'}>
											<span className={'article-card-source'}>ИА Красная Весна 15:26</span>
										</div>
									</footer>
								</div>
							</div>
						</div>


						<div className={'new-list'}>
							<div className={'news-list-item article-card-horizontal'}>
								<img className={'article-card-horizontal-img'} src="/img/banner/codilac.jpg" alt=""  width="100%" height="165"/>
								<div className={'article-card-horizontal-content'}>
							   	<h3 className={'article-card-horizontal-title'}>
										Отопление Ташкента на 30 лет переходит в управление французской Veolia
									</h3>
									<p className={'article-card-horizontal-text'}>Система теплоснабжения Ташкента на 30 лет будет передана в управление французской компании Veolia для модернизации и реконструкции, сообщает 22 сентября пресс-служба...</p>
									<footer className={'article-card-footer'}>
										<img className={'artical-card-source-icon'} src="/img/logo/codilac-logo.jpg" alt=""  width="20" height="20"/>
										<div className={'article-card-time'}>
											<span className={'article-card-source'}>ИА Красная Весна 15:26</span>
										</div>
									</footer>
								</div>
							</div>
						</div>

						<div className={'new-list'}>
							<div className={'news-list-item article-card-horizontal'}>
								<img className={'article-card-horizontal-img'} src="/img/banner/bmw.webp" alt=""  width="310" height="265"/>
								<div className={'article-card-horizontal-content'} >
									<h3 className={'article-card-horizontal-title'}>
										Отопление Ташкента на 30 лет переходит в управление французской Veolia
									</h3>
									<p className={'article-card-horizontal-text'}>Система теплоснабжения Ташкента на 30 лет будет передана в управление французской компании Veolia для модернизации и реконструкции, сообщает 22 сентября пресс-служба...</p>
									<footer className={'article-card-footer'}>
										<img className={'artical-card-source-icon'} src="/img/logo/bmw-logo.png" alt=""  width="20" height="20"/>
										<div className={'article-card-time'}>
											<span className={'article-card-source'}>ИА Красная Весна 15:26</span>
										</div>
									</footer>
								</div>
							</div>
						</div>

						<div className={'new-list'}>
							<div className={'news-list-item article-card-horizontal'}>
								<img className={'article-card-horizontal-img'} src="/img/events/BUSAN.webp" alt=""  width="210" height="165"/>
								<div className={'article-card-horizontal-content'}>
						  		<h3 className={'article-card-horizontal-title'}>
										Отопление Ташкента на 30 лет переходит в управление французской Veolia
									</h3>
									<p className={'article-card-horizontal-text'}>Система теплоснабжения Ташкента на 30 лет будет передана в управление французской компании Veolia для модернизации и реконструкции, сообщает 22 сентября пресс-служба...</p>
									<footer className={'article-card-footer'}>

										<img className={'artical-card-source-icon'} src="/img/logo/mers-logo.jpg" alt=""  width="20" height="20"/>
										<div className={'article-card-time'}>
											<span className={'article-card-source'}>ИА Красная Весна 15:26</span>
										</div>
									</footer>
								</div>
							</div>
						</div>
					</h2>
				 </section>
				 </div>


				{/* LAYOUT 2-1 SAIDBAR */}

				<div className={'layout-2-1-saidbar'}>



					<aside className={'layout-2-1-sidebar-item sidebar-ad-link'}>
					<video
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					style={{ width: '393px', height: '500px', objectFit: 'cover' }}
				>
					<source src="/video/ads5.mp4" type="video/mp4" />
				</video>
					</aside>

					<aside className={'layout-2-1-sidebar-item '}>
						<a className={' sidebar-ad-img2'} href="#">
						<video
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					style={{ width: '393px', height: '500px', objectFit: 'cover' }}
				>
					<source src="/video/asd6.mp4" type="video/mp4" />
				</video>
							{/* <img  className={"sidebar-ad-img2"} src="/img/events/BUSAN.webp" alt=""  width="393" height="500"  /> */}
						</a>
					</aside>
				</div>



				 </div>



				</Stack>
			</Stack>
		);
	}
};

export default Events;