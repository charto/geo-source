// This file is part of Charto, copyright (c) 2016 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import * as types from 'geo-types';

/** Map layer containing features of a single type. */

export class Layer<Type> {

	id: number;

	extent: types.Box;

	// projection: any;

	featureList: types.Feature<Type>;

}
