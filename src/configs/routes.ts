import IRoute from "interfaces/route";
import Home from '.././Home';
import Tirtagracia from 'apps/tirtagracia/Tirtagracia'

import {default as FakeStore } from 'apps/fake_store'
import {default as PokemonSearch } from 'apps/pokemon_search'
import {default as TodoContextTS } from 'apps/todo_context_ts'
import {default as BookDetail } from 'apps/book/BookDetail'
import {default as Others } from 'apps/others/index'

const routes: IRoute[] = [
    {
        path: '/',
        component:Home,
        exact: true
    },
    {
        path: '/tirtagracia',
        component:Tirtagracia,
        exact: true,
        // children: [
        //     {

        //     }
        // ]
    },
    {
        path: '/book/:id',
        component:BookDetail,
        exact: true
    },
    {
        path: '/fake-store',
        component:FakeStore,
        exact: true
    },
    {
        path: '/pokemon-search',
        component:PokemonSearch,
        exact: true
    },
    {
        path: '/todo-usecontext-ts',
        component:TodoContextTS,
        exact: true
    },
    {
        path: '/todo-usecontext-ts',
        component:Others,
        exact: true
    }
]


export default routes