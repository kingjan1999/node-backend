/**
 * Created by jan on 15.05.15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

function validator(val) {
    return JSON.stringify(val).length < 2000;
}

var spScheme = new Schema({
    schwerpunkt: String,
    p1: {
        kz: String,
        name: String,
        feld: String,
        stunden: {
            e4: Boolean,
            g4: Boolean,
            g2: Boolean
        }
    },
    p2: {
        kz: String,
        name: String,
        feld: String,
        stunden: {
            e4: Boolean,
            g4: Boolean,
            g2: Boolean
        }
    },
    p3: {
        kz: String,
        name: String,
        feld: String,
        stunden: {
            e4: Boolean,
            g4: Boolean,
            g2: Boolean
        }
    },
    p4: {
        kz: String,
        name: String,
        feld: String,
        stunden: {
            e4: Boolean,
            g4: Boolean,
            g2: Boolean
        }
    },
    p5: {
        kz: String,
        name: String,
        feld: String,
        stunden: {
            e4: Boolean,
            g4: Boolean,
            g2: Boolean
        }
    },
    fachstunden: {type: Schema.Types.Mixed, validate: [validator, "Object is too big"]}
});
spScheme.plugin(autoIncrement.plugin, 'Studienplan');

module.exports = mongoose.model('Studienplan', spScheme);