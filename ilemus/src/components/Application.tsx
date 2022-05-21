import * as React from 'react';
import { createClient } from '@supabase/supabase-js'
import Title from './Title'

const SITE_NAME: string = "Marketplace";
const SUPABASE_URL: string = "https://hpkupaswinocwnohjxkb.supabase.co";


export default function Application() {
    return (
    <Title>
        <p>content</p>
    </Title>
    )
}