import React from 'react';

type FirstLetterStyleType = {
	text: string;
	className: string;
}

export const FirstLetterStyle = ({ text, className }: FirstLetterStyleType) => {
	const words = text.split(' ');
	return (
		<>
			{words.map((word, i) => (
				<React.Fragment key={i}>
					<span key={i} className={className}>{word[0]}</span>
					{word.slice(1)}
					{' '}
				</React.Fragment>
			))}
		</>
	);
};