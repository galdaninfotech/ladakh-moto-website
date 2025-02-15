import { component$ } from '@builder.io/qwik';

interface SchemaProps {
    schema: object;
}

export const Schema = component$<SchemaProps>(({ schema }) => {
    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={JSON.stringify(schema)} />
    );
});