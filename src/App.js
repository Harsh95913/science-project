import './App.css';
import header from './assets/header.jpg';
import atom_structure from './assets/atom_structure.png';

function App() {
    return (
        <>
            <div className="header">
                <p>Metals & Non-Metals</p>
                <img alt="Header" src={header} />
            </div>
            <div className="x">
                <div className="topic">
                    <div className="topic-heading">What are elements?</div>
                    <br />
                    <div className="topic-content">
                        <div className="topic-text">Sound, like heat and light, is a form of energy. It is a natural phenomenon that is produced by vibrational motion of objects. It travels from the source to any place in the form of waves. Let us understand in detail how sound is produced.
                        </div>
                        <div className="topic-image">
                            <img alt="atom" src={atom_structure} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Elements-Type">
                <table>
                    <thead>
                        <tr>
                            <th className="left">Metals</th>
                            <th>Non-Metals</th>
                            <th className="right">Metalloids</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="light" style={{ borderBottomLeftRadius: '10px' }}>Metals are substances that form
                                naturally below the surface of the Earth.
                                Metals have 1, 2, 3 valence electrons. Metals are inorganic, which means they are made of
                                substances that were never alive. Metals are very strong and durable and therefore are used
                                to make many things. There are 92 metals in the periodic table. These are used for making
                                automobiles, satellites, utensils, etc. For example:– iron, copper, silver,
                                mercury, lead, aluminium, gold, platinum, zinc, nickel
                                and tin etc.</td>
                            <td className="dark">Non-metals are those which lack all the metallic attributes. The atoms of
                                non-metals tend to be smaller than those of metals. Non-metals have high
                                electronegativities. This means that the atoms of non-metals have a strong tendency to
                                attract more electrons than what they would normally have. In contrast, metals rather easily
                                give up one or more electrons to non-metals, metal therefore easily form positively charged
                                ions, and metals readily conduct electricity. For example - hydrogen, chlorine,
                                fluorine, carbon, nitrogen, phosphorus etc.</td>
                            <td className="light" style={{ borderBottomRightRadius: '10px' }}>A metalloid is a type of chemical
                                element which has a preponderance of
                                properties in between, or that are a mixture of, those of metals and non-metals. There is no
                                standard definition of a metalloid and no complete agreement on which elements are
                                metalloids. For example:– Boron, germanium, silicon, antimony, arsenic and tellurium.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="topic-heading" style={{ marginLeft: '55px', marginBottom: '100px', }}>Physical properties of metals
                and
                non-metals</div>
            <div className="Physical-Properties">
                <table style={{ width: '75%', }}>
                    <thead>
                        <tr>
                            <th className="left">ClassNameification Basis</th>
                            <th>Metals</th>
                            <th className="right">Non-Metals</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="light">Physical State</td>
                            <td className="dark">Most metals are solids at room temperature. Mercury is an exception
                                because it is known to occur in a liquid state at or near room temperature.</td>
                            <td className="light">almost all non-metals are solids or gases at room temperature. Bromine is
                                the only non-metal that exist as liquid at room temperature.</td>
                        </tr>
                        <tr>
                            <td className="light">Lustre</td>
                            <td className="dark">All metals are lustrous i.e. they are shiny and reflect out light.</td>
                            <td className="light">Non-metals are not lustrous as they do not shine like metals and do not
                                reflect out light.</td>
                        </tr>
                        <tr>
                            <td className="light">Color</td>
                            <td className="dark">Most metals are white or silvery-grey. However there are few exceptions, such
                                as copper is reddish brown in color and gold is a yellow colored metal.</td>
                            <td className="light">Some non-metals are colorless while some have colors. For example:- Chlorine
                                is a
                                greenish-brown gas, iodine is violet colored solid and oxygen and nitrogen are colorless
                                gases.</td>
                        </tr>
                        <tr>
                            <td className="light">Hardness</td>
                            <td className="dark">Most metals are hard but some are so soft that they can be cut with a knife.
                                Such as potassium and sodium.</td>
                            <td className="light">Non-metals are generally soft. Diamond is a form of carbon, is an exception.
                            </td>
                        </tr>
                        <tr>
                            <td className="light">Malleability</td>
                            <td className="dark">Metals are malleable i.e. they can be beaten into thin sheets.</td>
                            <td className="light">non-metals are not malleable i.e. they are brittle and can't be beaten into
                                thin sheets.</td>
                        </tr>
                        <tr>
                            <td className="light">Ductility</td>
                            <td className="dark">Metals are ductile i.e. they can be converted into wires.</td>
                            <td className="light">Non-metals are not ductile i.e. they can't be converted into wires.</td>
                        </tr>
                        <tr>
                            <td className="light">Thermal Conductivity</td>
                            <td className="dark">Metals are good conductors of heat. For example:- silver and copper.
                            </td>
                            <td className="light">Non-metals are poor conductors of heat. Diamond is good conductor of heat is
                                exception here.</td>
                        </tr>
                        <tr>
                            <td className="light">Electrical Conductivity</td>
                            <td className="dark">Metals are good conductors of electricity.</td>
                            <td className="light">Non-metals are poor conductors of electricity. Graphite is good conductor of
                                electricity is exception here.</td>
                        </tr>
                        <tr>
                            <td className="light" style={{ borderBottomLeftRadius: '10px', }}>Sonority</td>
                            <td className="dark">Metals are sonorous i.e. they produce sharp ringing sound when struck to an
                                hard object.</td>
                            <td className="light" style={{ borderBottomRightRadius: '10px', }}>Non-metals are not sonorous i.e.
                                they produce dull sound when struck to an
                                hard object.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="Chemical-Properties" style={{ marginLeft: '55px', marginBottom: '100px', }}>
                <div className="topic-heading">Chemical properties of metals and
                    non-metals</div>
                <br />
                <div className="topic-content">
                    <div className="topic-text">A chemical element is a species of atoms that have a given number of protons
                        in their nuclei, including the pure substance consisting only of that species. Unlike chemical
                        compounds, chemical elements cannot be broken down into simpler substances by any chemical
                        reaction.
                        Elements are of three types:-</div>
                    <div className="topic-image"><img alt="atom" src={atom_structure} /></div>
                </div>
            </div>
        </>
    );
}

export default App;