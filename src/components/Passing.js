import React from 'react';

export default function Passing({ data }) {
    return data.map((_, i) => (
        <p key={i}>
            Misses {_.orbiting_body} tomorrow at{' '}
            {new Intl.DateTimeFormat('de-DE', { timeStyle: 'short' }).format(_.epoch_date_close_approach)} by{' '} {new Intl.NumberFormat('de-DE', { style: 'decimal' }).format(_.miss_distance.kilometers)} kilometres whilst travelling
            at {new Intl.NumberFormat('de-DE', { style: 'unit', unit: 'kilometer-per-hour' }).format(_.relative_velocity.kilometers_per_hour)}
        </p>
    ));
}