import path from 'path'
import * as pg from 'pg'
import { DataSource } from 'typeorm'
import { loadFilesOnDirectory } from '../../utils/loadFilesOnDirectory'


pg.types.setTypeParser(pg.types.builtins.TIMESTAMP, (utcDateTime: string) => new Date(`${utcDateTime}Z`))

class DataSoucerBuilder {
    static readonly PATH_FILES = path.join(__dirname, 'model/*.{ts, js}')
    static readonly PATH_DIR = path.join(__dirname, 'model')

    static async resolveEntities() {
        if (process.platform === 'win32') {
            return loadFilesOnDirectory(this.PATH_DIR)
        } else {
            return [this.PATH_FILES]
        }
    }

    static async builderDataSource() {
        return new DataSource({
            type: 'postgres',
            url: 'postgresql://postgres:postgres@localhost:5432/postgres',
            synchronize: true,
            entities: await this.resolveEntities()

        })
    }
}

let dataSource: DataSource

async function getDataSource() {
    if (!dataSource) {
        dataSource = await DataSoucerBuilder.builderDataSource()
    }
    return dataSource
}

export {
    getDataSource
}

